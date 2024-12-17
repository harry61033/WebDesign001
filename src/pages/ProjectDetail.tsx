import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectModal from '../components/projects/ProjectModal';
import { projectDetails } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = id ? projectDetails[id as keyof typeof projectDetails] : null;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return <ProjectModal project={project} />;
}