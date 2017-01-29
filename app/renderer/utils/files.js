import fs from 'fs';
import path from 'path';

export const readDirRecursively = (rootDir) => {
  const files = [];

  return new Promise((resolve, reject) => {
    // Inner function for recursive operation
    function innerFun(dir) {
      fs.readdir(dir, (err, xpaths) => {
        if (err) reject(err);

        for (let xpath of xpaths) {
          const absPath = path.join(dir, xpath);
          if (fs.statSync(absPath).isDirectory()) {
            innerFun(absPath);
          } else {
            files.push(absPath);
          }
        }
      });
    }

    innerFun(rootDir);  // Call innerFun to initate
    resolve(files);
  });

};
