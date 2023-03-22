import '../Styles/headerStyle.css'

function Header () {
  return (
    <header>
      <div className='header'>
        <div className='header-menu'>
          <a href='/'>Accueil 1</a>
          <a href='/restaurants'>Restaurants</a>
          <a href='/about'>A propos 3</a>
        </div>
        <div className='header-logo'>
          <img src='https://cdn.worldvectorlogo.com/logos/50x50.svg' alt='Logo' />
        </div>
        <div className='header-reseaux-sociaux'>
          <a href='#'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/25px-LinkedIn_icon.svg.png' alt='LinkedIn' /></a>
          <a href='#'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/25px-Facebook_f_logo_%282019%29.svg.png' alt='Facebook' /></a>
          <a href='#'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/25px-Instagram_icon.png' alt='Instagram' /></a>
        </div>
      </div>
    </header>
  )
}

export default Header
