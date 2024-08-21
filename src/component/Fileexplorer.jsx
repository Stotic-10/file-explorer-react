import React, { useState } from 'react';

const Fileexplorer =({data}) => {
    const [showData, setShow] = useState(false);

    return (
        <div style={{ marginLeft: '20px',
        }}>
            <div className="hover"
                onClick={() => setShow(!showData)} 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 10px',
                    fontSize: '25px',
                    borderRadius: '10px',
                    backgroundColor: showData && data.isFolder ? 'white' : 'transparent',
                }}
            >
                <span style={{ marginRight: '10px' }}>
                    {data.isFolder ? (showData ? '📂' : '📁') : '📄'}
                </span> 
                <span>{data.name}</span>
            </div>
            <div 
                style={{
                    marginLeft: '20px',
                    display: showData ? "block" : "none",
                    borderLeft: '1px solid #ccc',
                    paddingLeft: '10px',
                    marginTop: '5px'
                }}
            >
                {data.isFolder && data.items.map((item) => (
                    <Fileexplorer  key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Fileexplorer ;
