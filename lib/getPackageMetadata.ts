import fs from 'fs'
import matter from 'gray-matter'

export function getPackageMetadata(basePath: string, fileName: string) {
  const folder = basePath + '/'
  const file = folder + `${fileName}.md`;
  const content = fs.readFileSync(file, "utf8");

  const packageDetails = matter(content);
  return packageDetails;
}