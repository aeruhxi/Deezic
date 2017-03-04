import fs from 'fs'
import path from 'path'

export const readDirRecursively = (rootDir, extensions) => {
  return new Promise((resolve, reject) => {
    function innerFun (dir, cb) {
      let files = []
      fs.readdir(dir, (err, xpaths) => {
        if (err) return cb(err, null)

        let filesCount = xpaths.length
        if (!filesCount) return cb(null, files)

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
            if (extensions) {
              if (extensions.includes(path.extname(absPath))) {
                files.push(absPath)
              }
            } else {
              files.push(absPath)
            }

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
