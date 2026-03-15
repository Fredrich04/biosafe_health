import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { ScanningScreen } from './components/ScanningScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { UpdateScreen } from './components/UpdateScreen';
import { SecurityScreen } from './components/SecurityScreen';

type Screen = 'home' | 'scanning' | 'dashboard' | 'update' | 'security';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [isOffline, setIsOffline] = useState(false);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="size-full bg-white overflow-hidden">
      {currentScreen === 'home' && (
        <HomeScreen
          onStartScan={() => navigateTo('scanning')}
          isOffline={isOffline}
        />
      )}
      {currentScreen === 'scanning' && (
        <ScanningScreen
          onScanComplete={() => navigateTo('dashboard')}
          isOffline={isOffline}
        />
      )}
      {currentScreen === 'dashboard' && (
        <DashboardScreen
          onNavigate={navigateTo}
          isOffline={isOffline}
        />
      )}
      {currentScreen === 'update' && (
        <UpdateScreen
          onBack={() => navigateTo('dashboard')}
          isOffline={isOffline}
        />
      )}
      {currentScreen === 'security' && (
        <SecurityScreen
          onBack={() => navigateTo('dashboard')}
          isOffline={isOffline}
        />
      )}

      {/* Demo controls - Toggle offline */}
      <button
        onClick={() => setIsOffline(!isOffline)}
        className="fixed bottom-4 left-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs shadow-lg z-50 opacity-30 hover:opacity-80 transition-opacity"
      >
        {isOffline ? '📴' : '📶'} Mode {isOffline ? 'Hors-ligne' : 'En ligne'}
      </button>
    </div>
  );
}