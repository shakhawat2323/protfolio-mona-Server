import bcrypt from "bcryptjs";
import httpStatus from "http-status-codes";
import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/AppError";
import { generateToken } from "../../utils/jwt";

const credentialsLogin = async (payload: {
  email: string;
  password: string;
}) => {
  const { email, password } = payload;

  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin)
    throw new AppError(httpStatus.BAD_REQUEST, "Email does not exist");

  const isPasswordMatched = await bcrypt.compare(password, admin.password);
  if (!isPasswordMatched)
    throw new AppError(httpStatus.BAD_REQUEST, "Incorrect password");

  // JWT payload
  const jwtPayload = { id: admin.id, email: admin.email, role: admin.role };

  // Tokens
  const accessToken = generateToken(
    jwtPayload,
    process.env.JWT_SECRET as string,
    process.env.JWT_EXPIRES_IN || "15m"
  );

  const refreshToken = generateToken(
    jwtPayload,
    process.env.JWT_EXPIRES_IN as string,
    process.env.JWT_REFRESH_EXPIRES || "7d"
  );

  return {
    message: "Login successful",
    id: admin.id,
    email: admin.email,
    name: admin.name,
    accessToken,
    refreshToken,
  };
};

export const AuthServices = {
  credentialsLogin,
};
