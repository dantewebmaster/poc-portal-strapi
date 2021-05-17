import Link from 'next/link';
import { useSettingsContext } from '../../contexts/Settings/SettingsContext';
import styles from '../../styles/Home.module.css';

export default function Header() {
  const { menus } = useSettingsContext();
  console.log('menus', menus);
  return (
    <header className={styles.header}>
      <nav>
        <ul className="menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          {menus?.map((menu) => (
            <li key={Math.random()}>
              <Link href={menu.slug}>{menu.title}</Link>
              {menu?.items && (
                <ul>
                  {menu.items.map((submenu) => (
                    <li>
                      <Link href={submenu.slug}>{submenu.title}</Link>

                      {submenu.items && (
                        <ul>
                          {submenu.items.map((sub) => (
                            <li>
                              <Link href={sub.slug}>{sub.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <a href="#">O que fazemos?</a>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">SEO</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
