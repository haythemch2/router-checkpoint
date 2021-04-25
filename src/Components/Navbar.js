import {useEffect,React}from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavMenu({onChange,searchcondition,setSearchcondition}) {
  let search ={name:'',rating:0}
  const handleSearch=()=>{
    setSearchcondition(search)
  }
useEffect(() => {
  handleSearch()
  return () => {
    console.log('effect ran')
  }
},[])
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='Navb'>
    <Navbar.Brand href="/home" >Netflix</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
      <Nav.Link ><Link to='/home'>Movies</Link></Nav.Link>
      <Nav.Link ><Link to='/add'>Add a movie</Link></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Movie name" className="mr-sm-2" onChange={x=>search.name=x.target.value}/>
      <Form.Control type='number' placeholder='rating' onChange={x=>search.rating=x.target.value} ></Form.Control>
      <Button onClick={handleSearch} variant="dark">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default NavMenu
