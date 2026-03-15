import { Wifi, WifiOff, Shield, Droplet, AlertTriangle, Pill, CheckCircle, Settings, User, RefreshCw, Lock } from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardScreenProps {
  onNavigate: (screen: 'update' | 'security' | 'dashboard') => void;
  isOffline: boolean;
}

export function DashboardScreen({ onNavigate, isOffline }: DashboardScreenProps) {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header with PWA Status */}
      <div className="bg-[#003D7A] px-6 pt-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">BioSafe-Health</span>
          </div>
          <div className="flex items-center gap-3">
            {/* PWA Offline Indicator */}
            <div className={`flex items-center gap-1 rounded-full px-3 py-1 ${isOffline ? 'bg-orange-500' : 'bg-green-500'}`}>
              {isOffline ? (
                <>
                  <WifiOff className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-medium">Hors-ligne - Synchronisé</span>
                </>
              ) : (
                <>
                  <Wifi className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-medium">En ligne</span>
                </>
              )}
            </div>
            <button
              onClick={() => onNavigate('security')}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Lock className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Patient Identity Card */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-white text-xl font-bold">Sophie Martin</h2>
              <p className="text-white/80 text-sm">Âge: 34 ans • ID: #BH-1990-7842</p>
              <div className="flex items-center gap-2 mt-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-xs font-medium">Vaccination à jour</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Critical Data Section */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <h3 className="text-gray-900 font-bold text-lg mb-4">Données Critiques</h3>

        <div className="space-y-4">
          {/* Blood Group Card */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-red-500"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                <Droplet className="w-6 h-6 text-red-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 font-semibold text-base mb-1">Groupe sanguin</h4>
                <p className="text-red-600 text-2xl font-bold">A+</p>
                <p className="text-gray-500 text-xs mt-1">Rhésus positif</p>
              </div>
            </div>
          </motion.div>

          {/* Allergies Card */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-orange-400"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 font-semibold text-base mb-3">Allergies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Pénicilline
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Arachides
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Latex
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Current Treatments Card */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-blue-500"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Pill className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 font-semibold text-base mb-3">Traitements en cours</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-medium text-sm">Levothyrox</p>
                      <p className="text-gray-500 text-xs">75µg/jour (hypothyroïdie)</p>
                    </div>
                    <span className="text-blue-600 text-xs font-medium">Actif</span>
                  </div>
                  <div className="h-px bg-gray-100"></div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-medium text-sm">Lisinopril</p>
                      <p className="text-gray-500 text-xs">10mg/jour (hypertension)</p>
                    </div>
                    <span className="text-blue-600 text-xs font-medium">Actif</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biometric Update Notification */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => onNavigate('update')}
            className="bg-gradient-to-r from-[#0066CC] to-[#003D7A] rounded-2xl p-5 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold text-base mb-1">Mise à jour disponible</h4>
                <p className="text-white/80 text-sm">
                  Un nouveau modèle biométrique a été généré suite aux évolutions naturelles détectées
                </p>
                <div className="mt-3 flex items-center gap-2 text-white text-sm font-medium">
                  <span>Voir les détails</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Security Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-xs">
          <Shield className="w-4 h-4" />
          <span>Toutes les données sont chiffrées en AES-256</span>
        </div>
      </div>
    </div>
  );
}
