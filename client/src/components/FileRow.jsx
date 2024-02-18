import React from 'react';
import {FaTrash} from 'react-icons/fa';

const FileRow = ({file,index}) => {
    const view=(fileName)=>{
        window.open(`https://4-alpha-sage.vercel.app/files/${fileName}`);
    };
  return (
    <tr>
        <td>{index + 1}</td>
        <td><a href="#" onClick={()=>view(file.fileName)}>{file.fileName}</a></td>
        {/* <td>
            <button className='btn btn-danger btn-sm'><FaTrash/></button>
        </td> */}
    </tr>  )
}

export default FileRow