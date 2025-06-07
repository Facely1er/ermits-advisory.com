import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowLeft, Download, Share2, BookOpen, Clock, 
  Calendar, Eye, FileText, ExternalLink, Tag,
  ChevronRight, Star, Users, Mail
} from 'lucide-react';

export const ResourceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Mock resource data - in real implementation, this would be fetched based on ID
  const resource = {
    id: id || 'wp-001',
    title: "Guide d'Implémentation STEEL™ - Version Complète",
    description: "Guide complet de 120 pages pour implémenter la méthodologie STEEL™ dans votre organisation. Incluant modèles, listes de vérification et guidance spécifique par secteur.",
    category: 'whitepapers',
    tags: ['steel', 'implémentation', 'méthodologie', 'guide'],
    date: '2025-01-15',
    readTime: '45 min',
    downloadUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Équipe de Recherche ERMITS',
    fileSize: '15.2 MB',
    downloads: 1247,
    views: 3892,
    featured: true,
    language: 'Français',
    format: 'PDF',
    pages: 120,
    content: {
      summary: "Ce guide d'implémentation complet fournit une feuille de route détaillée pour déployer avec succès la méthodologie STEEL™ dans votre organisation. Développé par nos experts en cybersécurité, ce document de 120 pages comprend des modèles pratiques, des listes de vérification détaillées et des conseils spécifiques à l'industrie.",
      keyTopics: [
        "Vue d'ensemble de la méthodologie STEEL™",
        "Processus d'implémentation en 5 phases",
        "Modèles et outils prêts à l'emploi",
        "Études de cas d'implémentation réussie",
        "Mesures de performance et métriques",
        "Adaptation par secteur d'activité"
      ],
      benefits: [
        "Réduction moyenne de 67% des risques cyber",
        "ROI de 3.4x en moins de 18 mois",
        "Amélioration de 83% du temps d'insight",
        "92% de confiance du conseil d'administration"
      ]
    }
  };

  const relatedResources = [
    {
      id: 'art-001',
      title: "Cinq Questions Critiques pour le Conseil d'Administration",
      category: 'articles',
      readTime: '12 min',
      imageUrl: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2'
    },
    {
      id: 'cs-001',
      title: "Transformation d'une Institution Financière Fortune 500",
      category: 'casestudies',
      readTime: '18 min',
      imageUrl: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2'
    },
    {
      id: 'web-001',
      title: "Naviguer les Risques Géopolitiques Cyber",
      category: 'webinars',
      readTime: '45 min',
      imageUrl: 'https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2'
    }
  ];

  const handleDownload = () => {
    console.log('Downloading resource:', resource.title);
    alert(`Téléchargement commencé pour: ${resource.title}`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: resource.title,
        text: resource.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers!');
    }
  };

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button 
            onClick={() => navigate('/resources')}
            className="inline-flex items-center text-navy dark:text-silver hover:underline mb-4 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour aux Ressources
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Resource Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Card variant="glass" padding="lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src={resource.imageUrl}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                      />
                      {resource.featured && (
                        <div className="absolute top-3 left-3">
                          <div className="bg-navy text-white text-xs font-medium px-2 py-1 rounded-md flex items-center">
                            <Star size={12} className="mr-1" />
                            En Vedette
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="flex items-center mb-3">
                      <span className="bg-navy/10 dark:bg-navy/30 text-navy dark:text-silver text-sm font-medium px-3 py-1 rounded-md mr-3">
                        {resource.category === 'whitepapers' ? 'Livre Blanc' : resource.category}
                      </span>
                      {resource.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded mr-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white">
                      {resource.title}
                    </h1>
                    
                    <p className="text-gray-600 dark:text-gray-200 mb-4">
                      {resource.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{new Date(resource.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{resource.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span>{resource.views.toLocaleString()} vues</span>
                      </div>
                      <div className="flex items-center">
                        <Download size={14} className="mr-1" />
                        <span>{resource.downloads.toLocaleString()} téléchargements</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="primary" 
                        icon={<Download size={16} />}
                        onClick={handleDownload}
                      >
                        Télécharger ({resource.fileSize})
                      </Button>
                      <Button 
                        variant="outline" 
                        icon={<Share2 size={16} />}
                        onClick={handleShare}
                      >
                        Partager
                      </Button>
                      <Button 
                        variant="outline" 
                        icon={<ExternalLink size={16} />}
                        onClick={() => navigate('/contact')}
                      >
                        Contacter un Expert
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Content Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <Card variant="glass" padding="lg">
                <h2 className="text-xl font-bold mb-4 dark:text-white">Résumé du Contenu</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  {resource.content.summary}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white flex items-center">
                      <BookOpen size={16} className="mr-2" />
                      Sujets Clés Couverts
                    </h3>
                    <ul className="space-y-2">
                      {resource.content.keyTopics.map((topic, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-200 text-sm flex items-start">
                          <ChevronRight size={14} className="text-navy dark:text-silver mt-0.5 mr-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white flex items-center">
                      <Star size={16} className="mr-2" />
                      Bénéfices Attendus
                    </h3>
                    <ul className="space-y-2">
                      {resource.content.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-200 text-sm flex items-start">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Author & Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Card variant="glass" padding="lg">
                <h2 className="text-xl font-bold mb-4 dark:text-white">Détails de la Publication</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <Users size={20} className="text-navy dark:text-silver mr-3" />
                      <div>
                        <h3 className="font-semibold dark:text-white">{resource.author}</h3>
                        <p className="text-gray-600 dark:text-gray-200 text-sm">Experts en Cybersécurité</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Langue:</span>
                        <span className="dark:text-white">{resource.language}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Format:</span>
                        <span className="dark:text-white">{resource.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Pages:</span>
                        <span className="dark:text-white">{resource.pages}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white">Expertise Requise</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded">
                        Niveau Exécutif
                      </span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-medium px-2 py-1 rounded">
                        Gestionnaire IT
                      </span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-xs font-medium px-2 py-1 rounded">
                        Équipe Sécurité
                      </span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      icon={<Mail size={16} />}
                      onClick={() => navigate('/contact')}
                    >
                      Questions sur ce Guide?
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <Card variant="glass" padding="md">
                <h3 className="font-semibold mb-4 dark:text-white">Actions Rapides</h3>
                <div className="space-y-3">
                  <Button 
                    variant="primary" 
                    fullWidth
                    icon={<Download size={16} />}
                    onClick={handleDownload}
                  >
                    Télécharger le Guide
                  </Button>
                  <Button 
                    variant="outline" 
                    fullWidth
                    icon={<Share2 size={16} />}
                    onClick={handleShare}
                  >
                    Partager
                  </Button>
                  <Button 
                    variant="outline" 
                    fullWidth
                    icon={<Mail size={16} />}
                    onClick={() => navigate('/contact')}
                  >
                    Consultation Expert
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Related Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Card variant="glass" padding="md">
                <h3 className="font-semibold mb-4 dark:text-white">Ressources Connexes</h3>
                <div className="space-y-4">
                  {relatedResources.map((related) => (
                    <div 
                      key={related.id}
                      className="flex items-start cursor-pointer hover:bg-silver/10 dark:hover:bg-navy/10 p-2 rounded transition-colors"
                      onClick={() => navigate(`/resources/${related.id}`)}
                    >
                      <div className="w-16 h-12 rounded overflow-hidden mr-3 flex-shrink-0">
                        <img 
                          src={related.imageUrl}
                          alt={related.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm dark:text-white line-clamp-2">
                          {related.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                          <span className="capitalize">{related.category}</span>
                          <span className="mx-1">•</span>
                          <span>{related.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button 
                    variant="outline" 
                    size="sm"
                    fullWidth
                    icon={<ChevronRight size={16} />}
                    iconPosition="right"
                    onClick={() => navigate('/resources')}
                  >
                    Voir Toutes les Ressources
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="solid" padding="md" className="bg-navy text-white">
                <h3 className="font-semibold mb-2">Besoin d'Aide?</h3>
                <p className="text-silver text-sm mb-4">
                  Nos experts sont disponibles pour vous aider avec l'implémentation de STEEL™.
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  fullWidth
                  icon={<Mail size={16} />}
                  onClick={() => navigate('/contact')}
                >
                  Contacter un Expert
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};