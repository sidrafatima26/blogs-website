import React,{useContext} from 'react';
import { AppContext } from '../Context/AppContext';



export default function Pagination(){
    const {page,handlePageChange, totalPages} = useContext(AppContext);
    return(
        <div className='w-full border flex justify-center items-center p-2 shadow-xl fixed bottom-0 bg-white'>
            <div className='flex justify-between w-11/12 max-w-[670px] py-2 '>
                <div className='flex gap-x-2'>
                {
                   page > 1 && <button className='border-black border rounded px-4 py-1' onClick={()=> handlePageChange(page-1)}> Previous </button>
                }
                {
                    page < totalPages && <button className='border-black border rounded px-4 py-1' onClick={()=> handlePageChange(page+1)}> Next </button>
                }
                
            </div>
            <p className='font-bold'> Page {page} of {totalPages} </p>
            </div>
        </div>
    );
}