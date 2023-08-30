import { useMobileMenu } from 'lib/context/mobile-menu-context'
import Container from 'modules/mobile-menu/components/container'
import MainMenu from 'modules/mobile-menu/components/main-menu'
import CountryMenu from '../components/country-menu'
// import SearchMenu from '../components/search-menu'

const MobileMenu = () => {
  const {
    screen: [currentScreen],
  } = useMobileMenu()

  return (
    <Container>
      <div className="flex flex-1 flex-col">
        {(() => {
          switch (currentScreen) {
            case 'country':
              return <CountryMenu />
            case 'search':
              // return <SearchMenu />
              return null
            default:
              return <MainMenu />
          }
        })()}
      </div>
    </Container>
  )
}

export default MobileMenu
