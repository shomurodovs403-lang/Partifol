import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, '../content');

async function checkPlaceholders(dir) {
  let foundPlaceholders = 0;
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      foundPlaceholders += await checkPlaceholders(fullPath);
    } else if (file.isFile() && fullPath.endsWith('.ts')) {
      const content = await fs.readFile(fullPath, 'utf8');
      
      // Look for [PLACEHOLDER] style strings (e.g. [PROJECT NAME])
      const regex = /\[([A-Z0-9_\s]+)\]/g;
      let match;
      const fileMatches = [];
      
      while ((match = regex.exec(content)) !== null) {
        fileMatches.push(match[0]);
      }
      
      if (fileMatches.length > 0) {
        console.warn(`\x1b[33m[WARN]\x1b[0m Found placeholders in ${path.relative(path.join(__dirname, '..'), fullPath)}:`);
        fileMatches.forEach(m => console.warn(`  - ${m}`));
        foundPlaceholders += fileMatches.length;
      }
    }
  }
  return foundPlaceholders;
}

async function run() {
  console.log("Checking content files for placeholders...");
  try {
    const count = await checkPlaceholders(contentDir);
    if (count > 0) {
      console.log(`\n\x1b[31mFound ${count} remaining placeholder(s) to replace before production.\x1b[0m`);
      // Return 0 even if placeholders are found so it doesn't break CI, but warns loudly.
      process.exit(0); 
    } else {
      console.log("\x1b[32m\nAll placeholders have been replaced! Ready for production.\x1b[0m");
    }
  } catch (error) {
    console.error("Error running placeholder check:", error);
    process.exit(1);
  }
}

run();
