/*
  # Seed Initial Data

  1. Populate resources table with sample content
  2. Add sample dashboard metrics
  3. Add sample threat intelligence
  4. Add sample strategic actions
*/

-- Insert sample resources
INSERT INTO resources (id, title, description, category, tags, date, read_time, download_url, image_url, author, file_size, downloads, views, featured, content) VALUES
(
  'wp-001',
  'The Executive''s Guide to Modern Cyber Risk Management',
  'A comprehensive guide for C-suite executives on implementing effective cyber risk management strategies using the STEEL methodology.',
  'whitepapers',
  ARRAY['steel', 'risk', 'leadership'],
  '2025-04-15',
  '25 min',
  'https://www.africau.edu/images/default/sample.pdf',
  'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'ERMITS Research Team',
  '15.2 MB',
  1247,
  3892,
  true,
  '{"summary": "This comprehensive guide provides C-suite executives with practical frameworks for managing cyber risk using our proprietary STEEL methodology.", "key_topics": ["STEEL methodology overview", "Executive risk assessment", "Board communication strategies", "ROI calculation methods"], "benefits": ["67% average risk reduction", "Improved board confidence", "Clear ROI metrics", "Actionable insights"]}'
),
(
  'art-001',
  'Five Critical Questions Every Board Should Ask About Cybersecurity',
  'Learn the essential questions board members should be asking to fulfill their cyber governance responsibilities effectively.',
  'articles',
  ARRAY['leadership', 'compliance'],
  '2025-03-22',
  '12 min',
  null,
  'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'ERMITS Advisory Board',
  null,
  892,
  2341,
  false,
  '{"summary": "Essential guidance for board members on cyber governance and oversight responsibilities.", "key_topics": ["Board oversight", "Risk appetite", "Incident response", "Compliance requirements"], "benefits": ["Better governance", "Informed decisions", "Regulatory compliance", "Risk awareness"]}'
),
(
  'cs-001',
  'How a Global Financial Institution Reduced Risk Exposure by 67%',
  'A detailed case study of how our STEEL methodology helped a major financial institution transform their cyber risk posture.',
  'casestudies',
  ARRAY['steel', 'risk', 'compliance'],
  '2025-02-10',
  '18 min',
  'https://www.africau.edu/images/default/sample.pdf',
  'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'ERMITS Case Study Team',
  '8.3 MB',
  567,
  1829,
  false,
  '{"summary": "Real-world implementation of STEEL methodology in a Fortune 500 financial institution.", "key_topics": ["Implementation timeline", "Challenges overcome", "Results achieved", "Lessons learned"], "benefits": ["67% risk reduction", "Improved compliance", "Cost savings", "Better resilience"]}'
);

-- Insert sample dashboard metrics
INSERT INTO dashboard_metrics (id, name, value, change, icon, category) VALUES
('vulnerabilities', 'Active Vulnerabilities', 37, -12, 'shield', 'security'),
('threats', 'Emerging Threats', 14, 3, 'alert-triangle', 'intelligence'),
('incidents', 'Recent Incidents', 2, -1, 'zap', 'operations'),
('compliance', 'Compliance Status', 94, 6, 'check-circle', 'governance');

-- Insert sample threat intelligence
INSERT INTO threat_intelligence (type, source, impact, timeline, description) VALUES
('Ransomware', 'Criminal Group', 'Critical', '0-30 days', 'New ransomware variant targeting financial services'),
('Phishing Campaign', 'Unknown', 'Medium', 'Active', 'Ongoing phishing campaign targeting executive emails'),
('Zero-day Vulnerability', 'Software Vendor', 'High', '0-14 days', 'Critical vulnerability in widely-used enterprise software'),
('Supply Chain Risk', 'Third-party Vendor', 'Medium', '30-90 days', 'Potential compromise of key supplier systems'),
('Insider Threat', 'Internal', 'High', 'Ongoing', 'Unusual access patterns detected in sensitive systems');

-- Insert sample strategic actions
INSERT INTO strategic_actions (priority, action, impact, status, due_date) VALUES
('Critical', 'Implement multi-factor authentication across all systems', 'Reduces account compromise risk by 99%', 'In Progress', '2025-02-15'),
('High', 'Update incident response plan for ransomware scenarios', 'Reduces potential downtime by 72%', 'Completed', '2025-01-30'),
('Medium', 'Conduct executive tabletop exercise', 'Improves executive decision-making during incidents', 'Not Started', '2025-03-01'),
('High', 'Review and update third-party security requirements', 'Reduces supply chain risk exposure', 'In Progress', '2025-02-28'),
('Medium', 'Implement enhanced email security controls', 'Reduces successful phishing attempts by 85%', 'Not Started', '2025-03-15');