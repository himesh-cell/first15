import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  initialProfiles,
  initialBuddies,
  initialTasks,
  initialCampusLocations,
  initialFaqs,
  initialHelpTickets,
  initialChatMessages,
  emergencyContacts
} from '../data/initialData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Authentication & Navigation View State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('first15_authenticated') === 'true';
  });

  const [currentView, setCurrentView] = useState(() => {
    const isAuth = localStorage.getItem('first15_authenticated') === 'true';
    return isAuth ? 'dashboard' : 'landing'; // 'landing', 'login', 'dashboard'
  });

  // Profiles
  const [profiles, setProfiles] = useState(() => {
    const saved = localStorage.getItem('first15_profiles');
    return saved ? JSON.parse(saved) : initialProfiles;
  });

  const [activeProfileId, setActiveProfileId] = useState(() => {
    const saved = localStorage.getItem('first15_activeProfileId');
    return saved || 'rahul-verma';
  });

  const activeProfile = profiles.find(p => p.id === activeProfileId) || profiles[0];

  // Active module/tab
  const [activeTab, setActiveTab] = useState('checklist'); // 'checklist', 'campus', 'buddy', 'overview'

  // Current simulation day (Day 1 - 15)
  const [currentDay, setCurrentDay] = useState(activeProfile.currentDay || 3);

  // Sync currentDay when profile changes
  useEffect(() => {
    if (activeProfile) {
      setCurrentDay(activeProfile.currentDay || 3);
    }
  }, [activeProfileId]);

  // Tasks
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('first15_tasks');
    return saved ? JSON.parse(saved) : initialTasks;
  });

  // Selected task for detailed modal
  const [selectedTask, setSelectedTask] = useState(null);

  // Campus map selected building
  const [selectedLocationId, setSelectedLocationId] = useState('loc-block32');

  // Help tickets
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem('first15_tickets');
    return saved ? JSON.parse(saved) : initialHelpTickets;
  });

  // Buddy chat messages
  const [chatMessages, setChatMessages] = useState(() => {
    const saved = localStorage.getItem('first15_chats');
    return saved ? JSON.parse(saved) : initialChatMessages;
  });

  // SOS Emergency modal open
  const [isSosOpen, setIsSosOpen] = useState(false);

  // Certificate modal open
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('first15_dark') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('first15_dark', darkMode.toString());
  }, [darkMode]);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('first15_profiles', JSON.stringify(profiles));
  }, [profiles]);

  useEffect(() => {
    localStorage.setItem('first15_activeProfileId', activeProfileId);
  }, [activeProfileId]);

  useEffect(() => {
    localStorage.setItem('first15_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('first15_tickets', JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem('first15_chats', JSON.stringify(chatMessages));
  }, [chatMessages]);

  // Filter tasks based on student type (Hosteller vs Day Scholar vs All)
  const relevantTasks = tasks.filter(task => {
    if (task.targetAudience === 'All') return true;
    return task.targetAudience === activeProfile.studentType;
  });

  // Task statistics
  const totalRelevantTasks = relevantTasks.length;
  const completedRelevantTasks = relevantTasks.filter(t => t.isCompleted).length;
  const completionPercentage = totalRelevantTasks > 0 
    ? Math.round((completedRelevantTasks / totalRelevantTasks) * 100) 
    : 0;

  const mandatoryTasks = relevantTasks.filter(t => t.priority === 'Mandatory');
  const completedMandatoryTasks = mandatoryTasks.filter(t => t.isCompleted).length;
  const mandatoryCompletionPercentage = mandatoryTasks.length > 0 
    ? Math.round((completedMandatoryTasks / mandatoryTasks.length) * 100)
    : 0;

  // Toggle task completion
  const toggleTaskCompletion = (taskId, customProof = null) => {
    setTasks(prev => {
      const updated = prev.map(t => {
        if (t.id === taskId) {
          const willBeCompleted = !t.isCompleted;
          if (willBeCompleted) {
            // Trigger celebratory confetti
            try {
              confetti({
                particleCount: 60,
                spread: 70,
                origin: { y: 0.7 }
              });
            } catch (e) {
              // Ignore if canvas-confetti is not loaded
            }
          }
          return {
            ...t,
            isCompleted: willBeCompleted,
            completedAt: willBeCompleted ? `Day ${currentDay}, Just now` : null,
            proofUploaded: customProof || t.proofUploaded
          };
        }
        return t;
      });
      return updated;
    });
  };

  // Switch profile
  const switchProfile = (profileId) => {
    setActiveProfileId(profileId);
  };

  // Student Login Function
  const login = (identifier, password) => {
    if (!identifier || !password) {
      return { success: false, message: 'Please enter both Student ID and Password.' };
    }

    const cleanId = identifier.trim().toLowerCase();
    const cleanPass = password.trim();

    // Match by registrationNo, id, or rollNo
    const matched = profiles.find(p => 
      p.registrationNo.toLowerCase() === cleanId ||
      p.id.toLowerCase() === cleanId ||
      p.rollNo.toLowerCase() === cleanId
    );

    if (!matched) {
      return { 
        success: false, 
        message: 'Student Registration Number not found. Demo IDs: 12401822 (Rahul) or 12409841 (Sneha)' 
      };
    }

    // Password validation (default: student123 or profile password)
    const expectedPass = matched.password || 'student123';
    if (cleanPass !== expectedPass && cleanPass !== 'student123') {
      return { 
        success: false, 
        message: 'Incorrect password! Use "student123" for demo accounts.' 
      };
    }

    // Success
    setActiveProfileId(matched.id);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
    localStorage.setItem('first15_authenticated', 'true');
    localStorage.setItem('first15_activeProfileId', matched.id);

    return { success: true, profile: matched };
  };

  // Quick 1-click Demo Login
  const quickLogin = (profileId) => {
    const matched = profiles.find(p => p.id === profileId) || profiles[0];
    setActiveProfileId(matched.id);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
    localStorage.setItem('first15_authenticated', 'true');
    localStorage.setItem('first15_activeProfileId', matched.id);
  };

  // Student Logout
  const logout = () => {
    setIsAuthenticated(false);
    setCurrentView('landing');
    localStorage.removeItem('first15_authenticated');
  };

  // Register New Student Account
  const register = (studentData) => {
    if (!studentData.name || !studentData.registrationNo || !studentData.password) {
      return { success: false, message: 'Please provide Name, Registration Number, and Password.' };
    }

    const regNo = studentData.registrationNo.trim();
    // Check if registrationNo already exists
    const exists = profiles.some(p => p.registrationNo.toLowerCase() === regNo.toLowerCase());
    if (exists) {
      return { success: false, message: `Registration No. ${regNo} is already registered! Please sign in.` };
    }

    const isHosteller = studentData.studentType === 'Hosteller';
    const newProfile = {
      id: `student-${regNo}`,
      name: studentData.name.trim(),
      registrationNo: regNo,
      password: studentData.password.trim(),
      rollNo: studentData.rollNo?.trim() || `RK24${regNo.slice(-3).toUpperCase()}`,
      program: studentData.program?.trim() || 'B.Tech Computer Science & Engineering',
      school: studentData.school?.trim() || 'School of Engineering & Technology',
      studentType: studentData.studentType || 'Hosteller',
      currentDay: 1,
      avatar: studentData.avatar || (isHosteller 
        ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'),
      hometown: studentData.hometown?.trim() || 'Campus Resident',
      assignedBuddyId: 'buddy-aarav',
      academicMentor: {
        name: 'Dr. Meenakshi Sundaram',
        designation: 'First-Year Academic Mentor',
        cabin: 'Block 34, Cabin 408',
        email: 'mentor.cse@university.edu.in'
      },
      hostelDetails: isHosteller ? {
        hostelName: studentData.hostelName?.trim() || 'Boys Hostel 2 (BH-2)',
        roomNo: studentData.roomNo?.trim() || '204-A',
        wardenName: 'Dr. R. K. Sharma',
        wardenContact: '+91 98765 43210',
        messSlot: 'North Indian Mess - Slot 1'
      } : undefined,
      commuteDetails: !isHosteller ? {
        busRouteNo: studentData.busRouteNo?.trim() || 'Route 07 (City Centre)',
        pickupPoint: studentData.pickupPoint?.trim() || 'Central Bus Stop (7:20 AM)',
        busCoordinator: 'Mr. Gurpreet Singh (+91 98140 11223)',
        parkingPermit: 'Day Scholar Permit Issued'
      } : undefined
    };

    setProfiles(prev => [...prev, newProfile]);
    setActiveProfileId(newProfile.id);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
    localStorage.setItem('first15_authenticated', 'true');
    localStorage.setItem('first15_activeProfileId', newProfile.id);

    return { success: true, profile: newProfile };
  };

  // Reset Student Password
  const resetPassword = (identifier, newPassword) => {
    if (!identifier || !newPassword) {
      return { success: false, message: 'Please provide your Registration Number and New Password.' };
    }

    const cleanId = identifier.trim().toLowerCase();
    const cleanPass = newPassword.trim();

    if (cleanPass.length < 4) {
      return { success: false, message: 'New password must be at least 4 characters.' };
    }

    const profileIndex = profiles.findIndex(p => 
      p.registrationNo.toLowerCase() === cleanId ||
      p.id.toLowerCase() === cleanId ||
      p.rollNo.toLowerCase() === cleanId
    );

    if (profileIndex === -1) {
      return { 
        success: false, 
        message: 'Student Registration Number not found. Check demo accounts: 12401822 or 12409841.' 
      };
    }

    const updatedProfiles = [...profiles];
    updatedProfiles[profileIndex] = {
      ...updatedProfiles[profileIndex],
      password: cleanPass
    };

    setProfiles(updatedProfiles);
    localStorage.setItem('first15_profiles', JSON.stringify(updatedProfiles));

    return { 
      success: true, 
      message: `Password reset successfully for ${updatedProfiles[profileIndex].name}! You can now log in.` 
    };
  };

  // Add custom profile
  const addProfile = (newProfile) => {
    const created = {
      ...newProfile,
      id: `profile-${Date.now()}`,
      currentDay: 1,
      assignedBuddyId: 'buddy-aarav'
    };
    setProfiles(prev => [...prev, created]);
    setActiveProfileId(created.id);
  };

  // Update student day
  const updateCurrentDay = (day) => {
    const clamped = Math.max(1, Math.min(15, day));
    setCurrentDay(clamped);
    setProfiles(prev => prev.map(p => {
      if (p.id === activeProfileId) {
        return { ...p, currentDay: clamped };
      }
      return p;
    }));
  };

  // Jump to location on Campus Guide
  const navigateToLocation = (locationId) => {
    setSelectedLocationId(locationId);
    setActiveTab('campus');
  };

  // Raise new Help Desk Ticket
  const createHelpTicket = ({ category, subject, description, priority }) => {
    const newTicket = {
      id: `tkt-${Date.now()}`,
      ticketNo: `TKT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      studentId: activeProfile.id,
      studentName: activeProfile.name,
      category,
      subject,
      description,
      priority,
      status: 'In Progress',
      assignedTo: category.includes('UMS') 
        ? 'Division of IT Services' 
        : category.includes('Hostel') 
          ? 'Hostel Chief Caretaker' 
          : 'Division of Student Welfare',
      createdAt: 'Just now',
      responses: [
        {
          author: 'Campus Helpdesk Dispatch',
          role: 'Support Bot',
          time: 'Just now',
          message: 'Your ticket has been received and prioritized for freshman onboarding assistance.'
        }
      ]
    };

    setTickets(prev => [newTicket, ...prev]);
    return newTicket;
  };

  // Add response to ticket
  const addTicketResponse = (ticketId, message, author = activeProfile.name) => {
    setTickets(prev => prev.map(t => {
      if (t.id === ticketId) {
        return {
          ...t,
          responses: [
            ...t.responses,
            {
              author,
              role: 'Student',
              time: 'Just now',
              message
            }
          ]
        };
      }
      return t;
    }));
  };

  // Send message to Buddy
  const sendBuddyMessage = (buddyId, text) => {
    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text
    };

    setChatMessages(prev => {
      const currentList = prev[buddyId] || [];
      return {
        ...prev,
        [buddyId]: [...currentList, userMsg]
      };
    });

    // Realistic smart auto-reply simulation after 1.2s
    setTimeout(() => {
      const lower = text.toLowerCase();
      let replyText = "Got it! Don't worry at all. Feel free to come see me during my office hours or ping me anytime.";

      if (lower.includes('curfew') || lower.includes('hostel') || lower.includes('biometric') || lower.includes('in-time')) {
        replyText = "Hostel curfew is strictly 7:30 PM! Always scan your biometric at the turnstiles before 7:25 PM to avoid parent notifications. If you have a legitimate lab or club delay, get an out-pass approved 24 hours prior.";
      } else if (lower.includes('attendance') || lower.includes('75%') || lower.includes('debar')) {
        replyText = "Keep your attendance above 80% to be safe! If you ever fall sick, visit the University Hospital on Day 1 and submit the medical slip on UMS within 3 days for duty leave endorsement.";
      } else if (lower.includes('ums') || lower.includes('password') || lower.includes('login') || lower.includes('locked')) {
        replyText = "If UMS isn't accepting your password, head over to Block 32, 2nd floor IT Helpdesk. Counter 3 fixes student login issues in 2 minutes!";
      } else if (lower.includes('food') || lower.includes('mess') || lower.includes('eat') || lower.includes('canteen')) {
        replyText = "UniMall 2nd floor has Domino's, Subway, and CCD. For regular mess food, you can switch between North and South Indian counters on UMS every fortnight.";
      } else if (lower.includes('book') || lower.includes('library') || lower.includes('reading')) {
        replyText = "Central Library (Block 37) is amazing! Floor 2 has silent cubicles with charging sockets, and the basement is open 24x7 with RFID access.";
      } else if (lower.includes('timetable') || lower.includes('room') || lower.includes('class')) {
        replyText = "Remember the room code logic: 34-602 = Block 34, 6th Floor, Room 2. Give yourself 10 mins to reach if your previous class is in Block 32!";
      } else if (lower.includes('bus') || lower.includes('route') || lower.includes('commute')) {
        replyText = "All campus buses depart sharply at 5:10 PM from the terminal behind UniMall. Don't be late or you'll have to take an auto from the national highway!";
      }

      const botMsg = {
        id: `msg-${Date.now() + 1}`,
        sender: 'buddy',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: replyText
      };

      setChatMessages(prev => {
        const currentList = prev[buddyId] || [];
        return {
          ...prev,
          [buddyId]: [...currentList, botMsg]
        };
      });
    }, 1200);
  };

  // Reset all tasks to initial state
  const resetAllProgress = () => {
    setTasks(initialTasks);
    setTickets(initialHelpTickets);
    setChatMessages(initialChatMessages);
    setCurrentDay(3);
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentView,
        setCurrentView,
        login,
        quickLogin,
        register,
        resetPassword,
        logout,
        profiles,
        activeProfile,
        activeProfileId,
        switchProfile,
        addProfile,
        currentDay,
        updateCurrentDay,
        activeTab,
        setActiveTab,
        tasks: relevantTasks,
        allTasksRaw: tasks,
        toggleTaskCompletion,
        selectedTask,
        setSelectedTask,
        totalRelevantTasks,
        completedRelevantTasks,
        completionPercentage,
        mandatoryTasks,
        completedMandatoryTasks,
        mandatoryCompletionPercentage,
        campusLocations: initialCampusLocations,
        selectedLocationId,
        setSelectedLocationId,
        navigateToLocation,
        buddies: initialBuddies,
        tickets,
        createHelpTicket,
        addTicketResponse,
        chatMessages,
        sendBuddyMessage,
        faqs: initialFaqs,
        emergencyContacts,
        isSosOpen,
        setIsSosOpen,
        isCertificateOpen,
        setIsCertificateOpen,
        darkMode,
        setDarkMode,
        resetAllProgress
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
