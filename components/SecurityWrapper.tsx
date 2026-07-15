'use client';

import { useEffect } from 'react';

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Prevent right-click context menu
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Prevent keyboard shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+C)
        const handleKeyDown = (e: KeyboardEvent) => {
            // Block F12
            if (e.key === 'F12') {
                e.preventDefault();
            }
            
            // Block Ctrl / Cmd based shortcuts
            if (e.ctrlKey || e.metaKey) {
                // Block Ctrl+C (Copy), Ctrl+S (Save), Ctrl+U (View Source)
                if (e.key === 'c' || e.key === 's' || e.key === 'u' || e.key === 'C' || e.key === 'S' || e.key === 'U') {
                    e.preventDefault();
                }

                // Block Inspect Elements combinations: Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J
                if (e.shiftKey) {
                    if (e.key === 'i' || e.key === 'c' || e.key === 'j' || e.key === 'I' || e.key === 'C' || e.key === 'J') {
                        e.preventDefault();
                    }
                }
            }
        };

        // Prevent dragging on the whole document
        const handleDragStart = (e: DragEvent) => {
            e.preventDefault();
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('dragstart', handleDragStart);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('dragstart', handleDragStart);
        };
    }, []);

    return <>{children}</>;
}
