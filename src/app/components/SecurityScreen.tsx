import { ArrowLeft, Shield, Lock, Database, FileKey, Eye, EyeOff, Key, Server, Wifi, WifiOff, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface SecurityScreenProps {
  onBack: () => void;
  isOffline: boolean;
}

export function SecurityScreen({ onBack, isOffline }: SecurityScreenProps) {
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
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">Sécurité & Confidentialité</h1>
            <p className="text-white/80 text-sm">Protection des données médicales</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Security Status */}
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
                Toutes les protections sont actives
              </h2>
              <p className="text-white/90 text-sm">
                Vos données médicales sont protégées par plusieurs couches de sécurité conformes aux normes RGPD et HIPAA.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Encryption Details */}
        <h3 className="text-gray-900 font-bold text-base mb-4">Couches de protection</h3>

        <div className="space-y-4">
          {/* AES-256 Encryption */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-5 shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-7 h-7 text-[#0066CC]" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 font-bold text-base mb-2">Chiffrement AES-256</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Toutes les données sont chiffrées avec l'algorithme AES-256, le standard militaire de chiffrement.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-xs text-gray-700 overflow-x-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#0066CC] font-semibold">Données brutes:</span>
                  </div>
                  <div className="text-gray-400 mb-2">Groupe sanguin: A+, Allergie: Pénicilline...</div>
                  <div className="flex items-center gap-2 mb-1">
                    <Lock className="w-3 h-3 text-[#0066CC]" />
                    <span className="text-[#0066CC] font-semibold">Chiffré AES-256:</span>
                  </div>
                  <div className="text-gray-900">aF7kL9mP2nQ5rS8tU1vW4xY7zA3bC6dE...</div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 text-sm font-medium">Actif</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hashing */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-5 shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileKey className="w-7 h-7 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 font-bold text-base mb-2">Hachage cryptographique</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Les templates biométriques sont hachés avec SHA-256, rendant impossible toute reconstruction de l'iris original.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-xs text-gray-700 overflow-x-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-600 font-semibold">Template biométrique:</span>
                  </div>
                  <div className="text-gray-400 mb-2">[Données binaires de l'iris]</div>
                  <div className="flex items-center gap-2 mb-1">
                    <FileKey className="w-3 h-3 text-purple-600" />
                    <span className="text-purple-600 font-semibold">Hash SHA-256:</span>
                  </div>
                  <div className="text-gray-900">e3b0c44298fc1c149afbf4c8996fb92...</div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 text-sm font-medium">Actif</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Privacy */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-5 shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <EyeOff className="w-7 h-7 text-orange-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 font-bold text-base mb-2">Confidentialité des données</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Aucune donnée biométrique brute n'est stockée. Seuls les templates hachés sont conservés.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">Templates hachés uniquement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">Impossible de reconstruire l'iris</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">Conforme RGPD & HIPAA</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 text-sm font-medium">Actif</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secure Communication */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-5 shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Server className="w-7 h-7 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 font-bold text-base mb-2">Communication sécurisée</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Toutes les transmissions utilisent TLS 1.3 avec authentification mutuelle.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">TLS 1.3 avec perfect forward secrecy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">Certificats X.509 validés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">Authentification mutuelle serveur-client</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 text-sm font-medium">Actif</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Access Control */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-5 shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Key className="w-7 h-7 text-red-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 font-bold text-base mb-2">Contrôle d'accès multi-niveaux</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Système d'autorisation granulaire avec traçabilité complète des accès.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">Authentification biométrique requise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">Logs d'audit horodatés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">Accès limité au personnel autorisé</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 text-sm font-medium">Actif</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Compliance Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 bg-gradient-to-r from-[#0066CC] to-[#003D7A] rounded-2xl p-6"
        >
          <div className="text-center">
            <Shield className="w-12 h-12 text-white mx-auto mb-3" />
            <h4 className="text-white font-bold text-base mb-2">
              Certifié conforme aux normes internationales
            </h4>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium">
                RGPD
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium">
                HIPAA
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium">
                ISO 27001
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium">
                HDS
              </span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-6 mb-4 text-center">
          <p className="text-gray-500 text-xs">
            Dernière vérification de sécurité : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </div>
  );
}
