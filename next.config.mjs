// @ts-check
 
export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    serverExternalPackages:  ['grammy'],
  }
  return nextConfig
}