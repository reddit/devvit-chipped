#!/usr/bin/env -S node --experimental-strip-types --no-warnings=ExperimentalWarning

import * as fs from 'node:fs/promises'

const dir = 'resources/audio'
const allFilenames = await fs.readdir(dir)
const filenames = allFilenames
  .filter(name => /\.mp3$/.test(name))
  .map(name => `${dir}/${name}`)
  .sort()

const out = await fs.open('webroot/assets/audio.cat', 'w')
let offset = 0
for (const fileName of filenames) {
  const stat = await fs.stat(fileName)

  console.log(`${fileName}\t${offset}`)

  const data = await fs.readFile(fileName)
  await out.write(data, 0, data.length, offset)
  offset += stat.size
}

await out.close()
