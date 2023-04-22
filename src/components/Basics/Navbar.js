import React from 'react'

const Navbar = ({filterItem, gameList}) => {
  return (
    <div>
        <nav className="navbar">
            <div className="btn-group">
                {
                    gameList.map((curElem)=>{
                        return (
                            <button className="btn-group__item" 
                                onClick={()=> filterItem(curElem)}>
                                    {curElem}
                            </button>
                        )
                    })
                }
            </div>
        </nav>
    </div>
  )
}

export default Navbar;