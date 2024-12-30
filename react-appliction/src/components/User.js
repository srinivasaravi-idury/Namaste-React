const User = (props)=>{
    const {name,location} =props
    return (
      <div>
        <h1>Users</h1>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
}

export default User