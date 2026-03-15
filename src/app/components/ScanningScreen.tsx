import { useEffect, useState } from 'react';
import { Eye, CheckCircle, Shield, Wifi, WifiOff } from 'lucide-react';
import { motion } from 'motion/react';

interface ScanningScreenProps {
  onScanComplete: () => void;
  isOffline: boolean;
}

export function ScanningScreen({ onScanComplete, isOffline }: ScanningScreenProps) {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStage, setScanStage] = useState<'capture' | 'liveness' | 'verification' | 'complete'>('capture');

  useEffect(() => {
    // Stage 1: Capture (0-30%)
    const captureInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev < 30) {
          return prev + 2;
        }
        return prev;
      });
    }, 100);

    const livenessTimer = setTimeout(() => {
      setScanStage('liveness');
      clearInterval(captureInterval);

      // Stage 2: Liveness Detection (30-70%)
      const livenessInterval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev < 70) {
            return prev + 2;
          }
          return prev;
        });
      }, 100);

      setTimeout(() => {
        setScanStage('verification');
        clearInterval(livenessInterval);

        // Stage 3: Verification (70-100%)
        const verificationInterval = setInterval(() => {
          setScanProgress((prev) => {
            if (prev < 100) {
              return prev + 3;
            }
            return prev;
          });
        }, 80);

        setTimeout(() => {
          setScanStage('complete');
          clearInterval(verificationInterval);
          setScanProgress(100);

          // Navigate to dashboard after success
          setTimeout(() => {
            onScanComplete();
          }, 1500);
        }, 1200);
      }, 2000);
    }, 1500);

    return () => {
      clearInterval(captureInterval);
      clearTimeout(livenessTimer);
    };
  }, [onScanComplete]);

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Status Bar */}
      <div className="px-6 pt-4 pb-2 bg-[#003D7A]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">Reconnaissance en cours</span>
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
      <div className="flex-1 flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#003D7A] to-[#0066CC]">
        {/* Scan Animation */}
        <div className="relative w-64 h-64 mb-8">
          {/* Outer scanning ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-white/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Middle ring */}
          <motion.div
            className="absolute inset-8 rounded-full border-4 border-white/50"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          {/* Inner ring */}
          <div className="absolute inset-16 rounded-full border-4 border-white/70 bg-white/10 backdrop-blur-sm flex items-center justify-center">
            {scanStage === 'complete' ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-24 h-24 text-green-400" />
              </motion.div>
            ) : (
              <Eye className="w-24 h-24 text-white" />
            )}
          </div>

          {/* Scanning laser effect */}
          {scanStage !== 'complete' && (
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ top: '50%' }}
              animate={{
                y: [-100, 100],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}
        </div>

        {/* Status Messages */}
        <div className="text-center mb-6">
          <motion.h2
            key={scanStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-2xl font-bold mb-2"
          >
            {scanStage === 'capture' && 'Capture de l\'iris'}
            {scanStage === 'liveness' && 'Vérification Liveness Detection'}
            {scanStage === 'verification' && 'Vérification de l\'identité'}
            {scanStage === 'complete' && 'Identification réussie'}
          </motion.h2>
          <motion.p
            key={`${scanStage}-desc`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/80 text-sm"
          >
            {scanStage === 'capture' && 'Maintenir la position...'}
            {scanStage === 'liveness' && 'Détection de présence humaine...'}
            {scanStage === 'verification' && 'Comparaison avec la base de données...'}
            {scanStage === 'complete' && 'Accès autorisé'}
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md">
          <div className="bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="bg-white h-full rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${scanProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-white/70 text-xs">
            <span>{scanProgress}%</span>
            <span>
              {scanStage === 'capture' && 'Étape 1/3'}
              {scanStage === 'liveness' && 'Étape 2/3'}
              {(scanStage === 'verification' || scanStage === 'complete') && 'Étape 3/3'}
            </span>
          </div>
        </div>

        {/* Security Indicators */}
        <div className="mt-12 flex flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: scanProgress >= 30 ? 1 : 0.3, x: 0 }}
            className="flex items-center gap-2 text-white/70 text-xs"
          >
            <div className={`w-2 h-2 rounded-full ${scanProgress >= 30 ? 'bg-green-400' : 'bg-white/30'}`} />
            <span>Capture biométrique</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: scanProgress >= 70 ? 1 : 0.3, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-white/70 text-xs"
          >
            <div className={`w-2 h-2 rounded-full ${scanProgress >= 70 ? 'bg-green-400' : 'bg-white/30'}`} />
            <span>Liveness Detection validée</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: scanProgress === 100 ? 1 : 0.3, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-white/70 text-xs"
          >
            <div className={`w-2 h-2 rounded-full ${scanProgress === 100 ? 'bg-green-400' : 'bg-white/30'}`} />
            <span>Identité vérifiée</span>
          </motion.div>
        </div>

        {/* Encryption Notice */}
        <div className="mt-8 flex items-center gap-2 text-white/50 text-xs">
          <Shield className="w-4 h-4" />
          <span>Communication chiffrée AES-256</span>
        </div>
      </div>
    </div>
  );
}
