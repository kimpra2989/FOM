'use client'

import { Slider } from '#/ui'
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
  const colors = getResultColors(r, g, b)
  const iHandler =
    (i: number, setState: Dispatch<SetStateAction<number[]>>) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setState(
        produce((prev) => {
          prev[i] = +e.target.value
        })
      )

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
            label="Red"
            min={0}
            max={255}
            value={r[0]}
            onChange={iHandler(0, setR)}
          />
          <Slider label="green" value={r[1]} onChange={iHandler(1, setR)} />
          <Slider label="blue" value={r[2]} onChange={iHandler(2, setR)} />
        </fieldset>
        <fieldset className={inputContainer}>
          <legend style={{ marginBottom: '12px' }}>green</legend>
          <Slider
            label="Green"
            min={0}
            max={255}
            value={g[0]}
            onChange={iHandler(0, setG)}
          />
          <Slider label="red" value={g[1]} onChange={iHandler(1, setG)} />
          <Slider label="blue" value={g[2]} onChange={iHandler(2, setG)} />
        </fieldset>
        <fieldset className={inputContainer}>
          <legend style={{ marginBottom: '12px' }}>blue</legend>
          <Slider
            label="Blue"
            min={0}
            max={255}
            value={b[0]}
            onChange={iHandler(0, setB)}
          />
          <Slider label="red" value={b[1]} onChange={iHandler(1, setB)} />
          <Slider label="green" value={b[2]} onChange={iHandler(2, setB)} />
        </fieldset>
      </section>
      <section className={right}>
        {colors.map((color) => {
          console.log('color', color)
          const { color: c, r, g, b } = color
          return (
            <div
              className={colorBox}
              style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
              key={c}
            >
              from : {c}
              <br />r : {r}
              <br />g : {g}
              <br />b : {b}
            </div>
          )
        })}
      </section>
    </main>
  )
}
