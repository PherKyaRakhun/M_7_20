
void b4(Process p, int timeQuantum) {
    p.remainingTime -= Math.min(p.remainingTime, timeQuantum);
    if (p.remainingTime > 0) processQueue.add(p);  // Re-add process if not finished
}
