'use client'

import { Slider } from '#/app/ui'
import { produce } from 'immer'
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import getResultColors from './getResultColors'
import { colorBox, container, inputContainer, left, right } from './page.css'

export default function TestPage() {
  const [r, setR] = useState<number[]>([0, 0, 0])
  const [g, setG] = useState<number[]>([0, 0, 0])
  const [b, setB] = useState<number[]>([0, 0, 0])
  const iHandler =
    (i: number, setState: Dispatch<SetStateAction<number[]>>) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setState(
        produce((prev) => {
          prev[i] = +e.target.value
        })
      )

  const colors = getResultColors(r, g, b)

  useEffect(() => {
    setR([
      ~~(Math.random() * 255),
      ~~(Math.random() * 100),
      ~~(Math.random() * 100),
    ])
    setG([
      ~~(Math.random() * 255),
      ~~(Math.random() * 100),
      ~~(Math.random() * 100),
    ])
    setB([
      ~~(Math.random() * 255),
      ~~(Math.random() * 100),
      ~~(Math.random() * 100),
    ])
  }, [setR, setG, setB])

  return (
    <main className={container}>
      <section className={left}>
        <fieldset className={inputContainer}>
          <legend style={{ marginBottom: '12px' }}>red</legend>
          <Slider
            label="hex"
            max={255}
            value={r[0]}
            onChange={iHandler(0, setR)}
          />
          <Slider label="명도" value={r[1]} onChange={iHandler(1, setR)} />
          <Slider label="채도" value={r[2]} onChange={iHandler(2, setR)} />
        </fieldset>
        <fieldset className={inputContainer}>
          <legend style={{ marginBottom: '12px' }}>green</legend>
          <Slider
            label="hex"
            max={255}
            value={g[0]}
            onChange={iHandler(0, setG)}
          />
          <Slider label="명도" value={g[1]} onChange={iHandler(1, setG)} />
          <Slider label="채도" value={g[2]} onChange={iHandler(2, setG)} />
        </fieldset>
        <fieldset className={inputContainer}>
          <legend style={{ marginBottom: '12px' }}>blue</legend>
          <Slider
            label="hex"
            max={255}
            value={b[0]}
            onChange={iHandler(0, setB)}
          />
          <Slider label="명도" value={b[1]} onChange={iHandler(1, setB)} />
          <Slider label="채도" value={b[2]} onChange={iHandler(2, setB)} />
        </fieldset>
      </section>
      <section className={right}>
        {colors.map((color) => {
          if ('hex' in color) {
            const { hex } = color
            return (
              <div
                className={colorBox}
                style={{ backgroundColor: `rgb(${hex}, ${hex}, ${hex})` }}
                key={hex}
              >
                hex : {hex}
              </div>
            )
          } else {
            const { h, s, l } = color
            console.log(h, s, l)

            return (
              <div
                className={colorBox}
                style={{ backgroundColor: `hsl(${h}, ${s}%, ${l}%)` }}
                key={'' + h + s + l}
              >
                채도 : {s}
                <br />
                명도 : {l}
              </div>
            )
          }
        })}
      </section>
    </main>
  )
}
