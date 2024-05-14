const Card =({children}:{children:React.ReactNode})=>{
    const cardStyle ={
        padding:'100px',
        margin:"10px",
        boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",
        display:"flex",
        alignItem:"center",
        justifyContent:"center",
        border:"1px solid #ddd"
    };

    return (<div style={cardStyle}>{children}</div>)
};

export default Card