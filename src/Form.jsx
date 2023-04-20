import { useState } from 'react'

const Form = ({ addColor }) => {
  const [color, setColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <section className='container'>
      <h4>Farbpaletten Generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          style={{ background: color }}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#ee733f'
        />
        <button type='submit' className='btn' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  )
}

export default Form
