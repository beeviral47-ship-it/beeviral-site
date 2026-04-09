'use server'

export async function verifyDashboardCredentials(
  username: string,
  password: string,
): Promise<boolean> {
  const validUsername = process.env.DASHBOARD_USERNAME
  const validPassword = process.env.DASHBOARD_PASSWORD

  // If env vars aren't set, deny all access
  if (!validUsername || !validPassword) return false

  return username === validUsername && password === validPassword
}
