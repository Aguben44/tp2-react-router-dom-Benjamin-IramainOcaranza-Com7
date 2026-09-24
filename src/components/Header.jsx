function Header  ( {nombre, profesion} )  {
  return (
    <header className="header">
    <h2 className= "header-title"> {nombre} </h2>
    <p className = "header-role"> {profesion}</p>
    </header>
  )
}

export default Header