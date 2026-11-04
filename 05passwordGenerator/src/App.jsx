import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [Length, setLength] = useState(8);
  const [numAllow, setnumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [Password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789" 
    
    if (charAllow) str += "!@#$%^&*()~"      
    

    for (let i = 1; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    
  }, [Length, numAllow, charAllow, setPassword])

  const copyPasswodToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGenrator()
  }, [Length, numAllow, charAllow, passwordGenrator])
  return (   
    
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-9 py-5 my-8 text-orange-500 bg-gray-400 justify-center'>
      <h1 className='text-white text-center'>Password Generator</h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
      
      <input 
      type='text'
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button 
      onClick={copyPasswodToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type='range'
        min={6}
        max={100}
        value={Length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)} }
        />
        <label>Length : {Length}</label>
      </div>
      <div className='flex items-center gap-x-2'>
        <input
        type='checkbox'
        defaultChecked={numAllow}
        id='numInput'
        onChange={() => {
          setnumAllow((prev) => !prev);
        }}
        />
        <label>Numbers</label>
        <input
        type='checkbox'
        defaultChecked={charAllow}
        id='charInput'
        onChange={() => {
          setcharAllow((prev) => !prev);
        }}
        />
        <label>Character</label>
      </div>
    </div>
  </div>  
    
  )
}

export default App
