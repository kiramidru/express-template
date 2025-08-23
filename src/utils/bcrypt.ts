import bcrypt from "bcrypt";

export async function generateHash(data: string, rounds = 12) {
  try {
    const hash = await bcrypt.hash(data, rounds);
    return hash;
  } catch (err) {
    console.error("error:", err);
    throw err;
  }
}

export async function verifyHash(data: string, hash: string) {
  try {
    const isMatch = await bcrypt.compare(data, hash);
    return isMatch;
  } catch (err) {
    console.error("error:", err);
    throw err;
  }
}
