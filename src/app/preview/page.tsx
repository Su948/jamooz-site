'use client';

import { useState } from 'react';

const R2 = 'https://pub-7c0fef674c514e7d8b3844cdeadf9c48.r2.dev/JAMOOZ_preview_web_assets';
const asset = (group: string, file: string) => `${R2}/${group}/${file}`;

const painGroups = [
  { id: 'head', label: 'Head', files: ['1.1.webp','1.2.webp','1.3.webp','1.4.webp'] },
  { id: 'arms', label: 'Arms', files: ['2.1.webp','2.2.webp','2.3.webp'] },
  { id: