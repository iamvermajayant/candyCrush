import React from 'react'

const Tile = ({ candy, candId }: { candy: string, candId: number }) => {
    return (
        <div 
            className='h-24 w-24 flex items-center justify-center select-none rounded-lg m-0.5 p-1.5'
            style={{
                boxShadow: "inset 5px 5px 15px #062525,inset -5px -5px 15px #aaaab7bb",
              }}
        >
            {candy && (
                <img src={candy} 
                    className='h-20 w-20' candy-id={candId} 
                />
                )}
        </div>
    )
}

export default Tile