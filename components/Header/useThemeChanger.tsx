import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

export const useThemeChanger = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (theme === 'system' && systemTheme) setTheme(systemTheme);
    }, [setTheme, theme, systemTheme]);

    function renderThemeChanger() {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return <HiSun className="w-7 h-7" />;
        } else {
            return <HiMoon className="w-7 h-7" />;
        }
    }

    function changeTheme() {
        if (theme && theme === 'light') {
            setTheme('dark');
        } else if (theme && theme === 'dark') {
            setTheme('light');
        }
    }

    return [renderThemeChanger, changeTheme] as const;
};
