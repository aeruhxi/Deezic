import mock from 'mock-fs'
import { readDirRecursively } from './../../../app/renderer/utils/files'

describe('read directory recursively', () => {
  const expectedArray = [
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/Rascal Flatts- Take ME There.mp3',
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/test.mp3',
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/Black Sabbath/Black_Sabbath_God_Is_Dead.mp3',
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/Black Sabbath/black sabbath iron man.mp3',
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/Pink Floyd/Comfortably Numb.mp3'
  ]
  const expectedArrayWithoutExtensions = [
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/Rascal Flatts- Take ME There.mp3',
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/dang',
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/dummy.txt',
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/test.mp3',
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/Black Sabbath/Black_Sabbath_God_Is_Dead.mp3',
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/Black Sabbath/black sabbath iron man.mp3',
    '/home/absolutezero/Documents/Projects/Deezic/dist/public/music/Pink Floyd/Comfortably Numb.mp3'
  ]

  beforeEach(() => {
    mock({
      '/home/absolutezero/Documents/Projects/Deezic/dist/public/music': {
        'Black Sabbath': {
          'Black_Sabbath_God_Is_Dead.mp3': '',
          'black sabbath iron man.mp3': ''
        },
        'Pink Floyd': {
          'Comfortably Numb.mp3': ''
        },
        'Rascal Flatts- Take ME There.mp3': '',
        'test.mp3': '',
        'dummy.txt': '',
        'dang': ''
      }
    })
  })

  afterEach(mock.restore)

  it('should resolve filepaths of given extensions', async () => {
    const dirs = await readDirRecursively('/home/absolutezero/Documents/Projects/Deezic/dist/public/music', ['.mp3'])
    expect(dirs).toEqual(expectedArray)
  })

  it('should resolve all filepaths with no extensions given', async () => {
    const dirs = await readDirRecursively('/home/absolutezero/Documents/Projects/Deezic/dist/public/music')
    expect(dirs).toEqual(expectedArrayWithoutExtensions)
  })

  it('should throw error for non existent directory', async () => {
    try {
      await readDirRecursively('nonExistentDirectory')
    } catch (e) {
      expect(e => expect(e.code).toBe('ENOENT'))
    }
  })
})
