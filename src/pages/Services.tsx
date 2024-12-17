import React from 'react';
import ServicesList from '../components/services/ServicesList';
import ProcessTimeline from '../components/services/ProcessTimeline';
import Container from '../components/common/Container';

export default function Services() {
  return (
    <main className="pt-20">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <ServicesList />
        <ProcessTimeline />
      </Container>
    </main>
  );
}