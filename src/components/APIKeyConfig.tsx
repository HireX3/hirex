'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle } from 'lucide-react';

/**
 * Component to allow API key configuration in the demo
 * This is for demonstration purposes only
 */

interface ProcessEnv {
  GEMINI_API_KEY?: string;
}

interface WindowWithProcess extends Window {
  process?: {
    env: ProcessEnv;
  };
}

export default function APIKeyConfig() {
  const [apiKey, setApiKey] = useState<string>('');
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  
  const handleSave = () => {
    // In a real application, never store API keys in client-side code
    // This is just for the demo
    if (typeof window !== 'undefined') {
      // Create a global process object to store the API key for demo purposes only
      const windowWithProcess = window as WindowWithProcess;
      if (!windowWithProcess.process) {
        windowWithProcess.process = { env: {} };
      }
      
      // Store the API key
      windowWithProcess.process.env.GEMINI_API_KEY = apiKey;
      
      // Show saved state
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setShowConfig(false);
      }, 2000);
    }
  };
  
  if (!showConfig) {
    return (
      <div className="absolute top-4 right-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowConfig(true)}
        >
          Configure API Key
        </Button>
      </div>
    );
  }
  
  return (
    <div className="absolute top-4 right-4 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 w-80">
      <div className="flex items-center mb-2 text-amber-600 dark:text-amber-400">
        <AlertCircle size={16} className="mr-2" />
        <span className="text-xs font-medium">For demo purposes only</span>
      </div>
      
      <h3 className="font-medium mb-2">Configure Gemini API Key</h3>
      <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3">
        Enter your Gemini API key to enable AI features in this demo.
        In a production app, API keys would be securely stored server-side.
      </p>
      
      <div className="space-y-3">
        <Input
          type="password"
          placeholder="Enter your Gemini API key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="text-sm"
        />
        
        <div className="flex justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowConfig(false)}
          >
            Cancel
          </Button>
          
          <Button
            size="sm"
            onClick={handleSave}
            disabled={!apiKey.trim()}
          >
            {saved ? 'Saved!' : 'Save Key'}
          </Button>
        </div>
      </div>
    </div>
  );
}
