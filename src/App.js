import {useEffect} from "react";
import { List } from 'antd';
import {
    searchInsert,
    maxArea,
    threeSum,
    removeDuplicates,
    removeElement,
    nextPermutation,
    search,
} from './utils/ArrayCom'
import {ARRAT_LIST_FN} from './consts/ArrayData'
import './App.css';

import Vditor from "./components/Vditor"

function App() {

    // let arr1 = Array.from(new Array(1000000), (x, index)=>{
    //     return index
    // })
    //
    // let arr2 = Array.from(new Array(5000000), (x, index)=>{
    //     return index+index
    // })
    // let arr = arr1.concat(arr2)
    // function distinct(arr) {
    //    // return  Array.from(new Set(arr))
    //     let result = []
    //     let obj = {}
    //     for (let i of arr) {
    //         if (!obj[i]) {
    //             result.push(i)
    //             obj[i] = 1
    //         }
    //     }
    //     return result
    // }
    // let start = new Date().getTime()
    // console.log('开始数组去重')
    // distinct(arr)
    // let end = new Date().getTime()
    // console.log('耗时', end - start)



    useEffect(()=>{
       // console.log(search([1,3],1))
    },[])
    const changeItem = (item) =>{
        console.log(item)
    }
  return (
    <div className="App">
        <Vditor />
      {/*<List*/}
      {/*    header={<div>Array</div>}*/}
      {/*    bordered*/}
      {/*    dataSource={ARRAT_LIST_FN}*/}
      {/*    renderItem={item => (<List.Item onClick={()=> changeItem(item)}>*/}
      {/*        <List.Item.Meta description={item.title}/>*/}
      {/*    </List.Item>)}*/}
      {/*/>*/}

    </div>
  );
}

export default App;
