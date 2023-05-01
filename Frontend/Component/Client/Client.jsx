const Client = () => {
    const ClientData = [{
        id: "1",
        logo:"/media/clients/1.png"
    },
    {
        id: "2",
        logo:"/media/clients/2.png"
        },
        {
            id: "3",
            logo:"/media/clients/3.png"
        }
        ,
        {
            id: "4",
            logo:"/media/clients/4.png"
        }
    ]
  return (
      <div className="client container-fluid d-flex justify-content-center flex-wrap" style={{backgroundColor:"rgb(237, 85, 33)"}}>
           <center className=" d-flex " style={{maxWidth:"39rem"}} >
              {ClientData.map((item) => (
                  <div className="d-flex" key={item.id}>
                      <img src={ item.logo} alt="" width={140}/>
                  </div>
              ))}
          </center>
    </div>
  )
}

export default Client