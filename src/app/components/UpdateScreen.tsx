import { ArrowLeft, RefreshCw, TrendingUp, CheckCircle, Shield, Wifi, WifiOff, Activity } from 'lucide-react';
import { motion } from 'motion/react';

interface UpdateScreenProps {
  onBack: () => void;
  isOffline: boolean;
}

export function UpdateScreen({ onBack, isOffline }: UpdateScreenProps) {
  const matchScore = 94.7;
  const previousScore = 88.2;
  const updateDate = '15 mars 2026';

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-[#003D7A] px-6 pt-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Retour</span>
          </button>
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

        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
            <RefreshCw className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">Mise à jour biométrique</h1>
            <p className="text-white/80 text-sm">Template Update - Adaptation</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Success Notification */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-lg mb-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-white text-lg font-bold mb-2">
                Nouveau modèle biométrique généré
              </h2>
              <p className="text-white/90 text-sm leading-relaxed">
                Le système a détecté une évolution naturelle de vos caractéristiques biométriques.
                Un nouveau template a été créé automatiquement pour maintenir une reconnaissance optimale.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Match Score Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-md mb-6"
        >
          <h3 className="text-gray-900 font-bold text-base mb-4">Score de correspondance</h3>

          {/* Current Score */}
          <div className="mb-6">
            <div className="flex items-end gap-3 mb-2">
              <span className="text-[#0066CC] text-5xl font-bold">{matchScore}%</span>
              <div className="flex items-center gap-1 text-green-600 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-lg font-semibold">+{(matchScore - previousScore).toFixed(1)}%</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Précision du nouveau modèle biométrique
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Nouveau modèle</span>
                <span className="text-[#0066CC] font-semibold">{matchScore}%</span>
              </div>
              <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-[#0066CC] to-[#003D7A] h-full rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${matchScore}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Ancien modèle</span>
                <span className="text-gray-400 font-semibold">{previousScore}%</span>
              </div>
              <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gray-300 h-full rounded-full"
                  style={{ width: `${previousScore}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Update Details */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-md mb-6"
        >
          <h3 className="text-gray-900 font-bold text-base mb-4">Détails de la mise à jour</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-[#0066CC]" />
              </div>
              <div>
                <p className="text-gray-900 font-medium text-sm mb-1">Évolution détectée</p>
                <p className="text-gray-600 text-sm">
                  Changements naturels de la structure de l'iris détectés au fil du temps
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-900 font-medium text-sm mb-1">Algorithme Template Update</p>
                <p className="text-gray-600 text-sm">
                  Adaptation automatique du modèle sans nouvelle inscription
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-gray-900 font-medium text-sm mb-1">Validation réussie</p>
                <p className="text-gray-600 text-sm">
                  Le nouveau template a été testé et validé le {updateDate}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-100 rounded-2xl p-5"
        >
          <h4 className="text-gray-700 font-semibold text-sm mb-3">Informations techniques</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">ID Template</span>
              <span className="text-gray-900 font-mono">#TPL-2026-0315</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Version</span>
              <span className="text-gray-900 font-mono">v2.3.1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date de création</span>
              <span className="text-gray-900">{updateDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Échantillons utilisés</span>
              <span className="text-gray-900">12 captures</span>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={onBack}
          className="w-full mt-6 bg-[#0066CC] hover:bg-[#0052A3] text-white rounded-xl py-4 font-semibold shadow-md transition-colors"
        >
          Retour au profil
        </motion.button>

        {/* Security Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-xs">
          <Shield className="w-4 h-4" />
          <span>Mise à jour chiffrée et sécurisée</span>
        </div>
      </div>
    </div>
  );
}
