
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log('Student login attempted with:', { studentId, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8ecae6] to-[#219ebc] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/23ead6eb-64a7-49ff-b85e-923f1ded7e0e.png" 
            alt="SINU Logo" 
            className="h-16 w-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-[#082952] mb-2">Student Portal</h1>
          <p className="text-[#219ebc]">Solomon Islands National University</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="studentId" className="text-[#082952] font-medium">Student ID</Label>
            <Input
              id="studentId"
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter your student ID"
              className="border-[#8ecae6] focus:border-[#219ebc]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#082952] font-medium">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border-[#8ecae6] focus:border-[#219ebc] pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#219ebc] hover:text-[#082952]"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-[#219ebc] focus:ring-[#219ebc] border-[#8ecae6] rounded"
              />
              <Label htmlFor="remember" className="ml-2 text-sm text-[#082952]">
                Remember me
              </Label>
            </div>
            <Link to="#" className="text-sm text-[#219ebc] hover:text-[#082952]">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#219ebc] hover:bg-[#082952] text-white py-2 px-4 rounded-md transition-colors"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#082952]">
            New student?{' '}
            <Link to="/applicant-login" className="text-[#219ebc] hover:text-[#082952]">
              Apply here
            </Link>
          </p>
          <p className="text-sm text-[#082952] mt-2">
            Need help? Contact{' '}
            <Link to="#" className="text-[#219ebc] hover:text-[#082952]">
              Student Services
            </Link>
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-[#219ebc] hover:text-[#082952] text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
