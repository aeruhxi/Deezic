import fs from 'fs'
import path from 'path'

export const readDirRecursively = (rootDir) => {
  return new Promise((resolve, reject) => {
    function innerFun (dir, cb) {
      let files = []
      fs.readdir(dir, (err, xpaths) => {
        if (err) reject(err, null)
        let filesCount = xpaths.length
        if (!filesCount) return cb(files)

        for (let xpath of xpaths) {
          const absPath = path.join(dir, xpath)
          if (fs.statSync(absPath).isDirectory()) {
            innerFun(absPath, (err, xfiles) => {
              if (err) return (cb(err, null))
              files = files.concat(xfiles)
              filesCount--
              if (filesCount <= 0) return cb(null, files)
            })
          } else {
            files.push(absPath)
            filesCount--
            if (filesCount <= 0) {
              return cb(null, files)
            }
          }
        }
      })
    }

    innerFun(rootDir, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}
