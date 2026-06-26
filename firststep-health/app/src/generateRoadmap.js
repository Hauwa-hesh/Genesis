import sampleResult from './sampleResult.json';

export async function generateRoadmap(formData) {
  const service = formData.service || 'Healthcare Microservice';

  return {
    ...sampleResult,
    service,
    summary: `You want to start ${service} in Al Qua'a. This roadmap gives a safe starting point using verified research notes and highlights what must be confirmed with official UAE authorities.`,
    licensePath: 'Possible approval pathway: verify the applicable Department of Health Abu Dhabi requirements for this healthcare activity. Exact licensing depends on the service type, qualifications, location, and operating model.',
    tomorrowMorning: [
      'Write down the exact healthcare service you want to offer and what your qualification allows you to do.',
      'Check the official Department of Health Abu Dhabi website for the relevant healthcare facility or service requirements.',
      'Prepare a list of questions to confirm with DOH or the relevant authority before applying.'
    ]
  };
}
