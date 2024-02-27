import React from 'react';
import { atom, useRecoilState, selector } from 'recoil';

export const charAtom = atom({
    key : 'charState',
    default:0
})

export const charTextSelector = selector({
  key: 'charTextSelector',
  get: ({ get }) => {
    const text = get(charAtom);
    return text;
  },
});

function CharCount() {
    const [text, setText] = useRecoilState(charAtom)
  return (
    <div>
      <input placeholder='type something...' type='text' onChange={(e)=>setText(e.target.value)}></input>
    </div>
  )
}

export default CharCount
