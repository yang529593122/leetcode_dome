import './App.css';
import { List } from 'antd';
import {
    searchInsert,
    maxArea,
    threeSum,
    removeDuplicates,
    removeElement,
    nextPermutation
} from './utils/ArrayCom'
import {ARRAT_LIST_FN} from './consts/ArrayData'
import {useEffect} from "react";

function App() {
    useEffect(()=>{
        console.log(nextPermutation([1,2,3,4,5]))
    },[])
    const changeItem = (item) =>{
        console.log(item)
    }
  return (
    <div className="App">
      <List
          header={<div>Array</div>}
          bordered
          dataSource={ARRAT_LIST_FN}
          renderItem={item => (<List.Item onClick={()=> changeItem(item)}>
              <List.Item.Meta description={item.title}/>
          </List.Item>)}
      />

    </div>
  );
}

export default App;
