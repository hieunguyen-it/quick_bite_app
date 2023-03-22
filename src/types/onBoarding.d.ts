interface Onboarding {
  commonContent: string;
  onboardingConfig: OnboardingConfig[];
}

interface OnboardingConfig {
  content: string;
  contentColor: string;
  image: string;
}
