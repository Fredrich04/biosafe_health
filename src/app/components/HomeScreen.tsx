import { useState } from 'react';
import { Fingerprint, Key, Shield, Wifi, WifiOff } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeScreenProps {
  onStartScan: () => void;
  isOffline: boolean;
}

export function HomeScreen({ onStartScan, isOffline }: HomeScreenProps) {
  const [parentalKey, setParentalKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(false);

  const handleScan = () => {
    // Simulate a brief delay then navigate to scanning screen
    setTimeout(() => {
      onStartScan();
    }, 300);
  };

  const handleParentalAccess = () => {
    if (parentalKey.length >= 6) {
      onStartScan();
    }
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-[#003D7A] to-[#0066CC]">
      {/* Status Bar */}
      <div className="px-6 pt-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">BioSafe-Health</span>
          </div>
          <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
            {isOffline ? (
              <>
                <WifiOff className="w-4 h-4 text-white" />
                <span className="text-white text-xs">Hors-ligne</span>
              </>
            ) : (
              <>
                <Wifi className="w-4 h-4 text-white" />
                <span className="text-white text-xs">En ligne</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Shield className="w-14 h-14 text-white" />
          </div>
          <h1 className="text-white text-3xl font-bold mb-3">BioSafe-Health</h1>
          <p className="text-white/80 text-base">
            Système d'identité médicale biométrique
          </p>
        </motion.div>

        {/* Biometric Scan Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <button
            onClick={handleScan}
            className="w-full bg-white hover:bg-gray-50 text-[#003D7A] rounded-2xl shadow-2xl p-8 transition-all transform hover:scale-105 active:scale-95"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Fingerprint className="w-20 h-20 mx-auto mb-4 text-[#0066CC]" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2">Scanner votre identité</h2>
            <p className="text-gray-600 text-sm">
              Identification biométrique sécurisée
            </p>
          </button>
        </motion.div>

        {/* Parental Key Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-sm mt-6"
        >
          {!showKeyInput ? (
            <button
              onClick={() => setShowKeyInput(true)}
              className="w-full flex items-center justify-center gap-2 text-white/80 hover:text-white py-3 transition-colors"
            >
              <Key className="w-5 h-5" />
              <span className="text-sm">Utiliser la clé parentale de secours</span>
            </button>
          ) : (
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <Key className="w-5 h-5 text-white" />
                <h3 className="text-white font-semibold">Clé parentale de secours</h3>
              </div>
              <input
                type="password"
                placeholder="Entrez la clé à 6 chiffres"
                value={parentalKey}
                onChange={(e) => setParentalKey(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="w-full bg-white/90 text-[#003D7A] rounded-lg px-4 py-3 text-center text-2xl tracking-widest font-mono mb-4 focus:outline-none focus:ring-2 focus:ring-white"
                maxLength={6}
              />
              <div className="flex gap-3">
                <button
                  onClick={() => setShowKeyInput(false)}
                  className="flex-1 bg-white/20 hover:bg-white/30 text-white rounded-lg py-2 text-sm transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleParentalAccess}
                  disabled={parentalKey.length < 6}
                  className="flex-1 bg-white hover:bg-gray-100 text-[#003D7A] rounded-lg py-2 text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Valider
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Security Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 flex items-center gap-2 text-white/60 text-xs"
        >
          <Shield className="w-4 h-4" />
          <span>Chiffrement AES-256 • Données sécurisées</span>
        </motion.div>
      </div>
    </div>
  );
}
