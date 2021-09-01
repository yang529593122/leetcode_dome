/**
 * Time: 2021/8/31.
 * Author: Yang PengFei
 */
import React,{useEffect} from 'react';
import Vditor from "vditor"
const Vditors = () => {
    useEffect(()=>{
        const that=this
        const vditor = new Vditor('vditor', {
            height: 500,
            toolbarConfig: {
                pin: true,
            },
            toolbar:[
                'emoji' ,
                'headings' ,
                'bold' ,
                'italic' ,
                'strike' ,
                '|' ,
                'line' ,
                'quote' ,
                'list' ,
                'ordered-list' ,
                'check' ,
                'outdent' ,
                'indent' ,
                'code' ,
                'inline-code' ,
                'insert-after' ,
                'insert-before' ,
                'undo' ,
                'redo' ,
                'upload' ,
                'link' ,
                'table' ,
                'record' ,
                'edit-mode' ,
                'both' ,
                'preview' ,
                'fullscreen' ,
                'outline' ,
                'code-theme' ,
                'content-theme' ,
                'export',
                'devtools' ,
                'info' ,
                'help' ,
                'br'
            ],
            cache: {
                enable: false,
            },
            after () {
                vditor.setValue('Hello, Vditor + React!')
            },


        })

    },[])
    return (
        <div id='vditor'></div>
    );
};

export default Vditors;
