export const getThemeOptions = options => {
  const { activate = {} } = options;
  const darkThemeOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // Білий текст для легенди
        },
      },
      tooltip: {
        backgroundColor: '#333', // Темний фон підказок
        titleColor: '#fff', // Білий текст заголовків
        bodyColor: '#fff', // Білий текст тіла
      },
    },
  };

  if (activate.scales) {
    darkThemeOptions.scales = {
      x: {
        ticks: {
          color: '#ffffff', // Білий текст на осі X
        },
        grid: {
          color: '#444', // Сіра сітка
        },
      },
      y: {
        ticks: {
          color: '#ffffff', // Білий текст на осі Y
        },
        grid: {
          color: '#444', // Сіра сітка
        },
      },
    };
  }
  return { ...darkThemeOptions, ...options };
};
